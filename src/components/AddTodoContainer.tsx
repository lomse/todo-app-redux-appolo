import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Select, { ValueType } from 'react-select'
import { Redirect } from 'react-router-dom'
import { subDays } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'
import PageTitle from './Elements/PageTitle'
import TextInputElement from './Elements/TextInputElement'
import FormGroup from './Elements/FormGroup'
import Label from './Elements/Label'
import { IDropdownOption } from '../types/todo'
import Button from './Elements/Button'
import { BUTTON_TYPES, INPUT_TYPES, IDataStore } from '../types/common'
import './styles.css'
import ErrorLabel from './Elements/ErrorLabel'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions/todo'

const options: IDropdownOption[] = [
  { label: 'Never', value: '' },
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Yearly', value: 'Yearly' }
]

const defaultOption: IDropdownOption = { label: 'Never', value: '' }


const AddTodoContainer = () => {
  const dispatch = useDispatch()
  const addingTodoStarted = useSelector((state: IDataStore) => state.todos.addingStarted)
  const addingTodoEnded = useSelector((state: IDataStore) => state.todos.addingEnded)
  const [dueDate, setDueDate] = useState(new Date())
  const [dueTime, setDueTime] = useState(new Date())
  const [repeatInterval, setRepeatInterval] = useState<ValueType<IDropdownOption>>(defaultOption)
  const [listTodos, setListTodos] = useState(false)
  const [todoTitle, setTodoTitle] = useState('')
  const [formValidation, setFormValidation] = useState({
    todoTitle: true,
    dueDate: true,
    dueTime: true
  })

  const handleChangeTodoTitleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormValidation({ ...formValidation, todoTitle: true })
    setTodoTitle(evt.target.value)
  }


  const handleSubmitForm = (evt: React.FormEvent) => {
    evt.preventDefault()
    handleSubmitButton()
  }


  const handleSubmitButton = () => {
    let formBody = { title: todoTitle, dueDate, dueTime }

    setFormValidation({ todoTitle: !!todoTitle, dueDate: !!dueDate, dueTime: !!dueTime })

    if(todoTitle && dueTime && dueTime) {
      dispatch(addTodo(formBody))
    }
  }

  return (
    <React.Fragment>
      {listTodos && <Redirect to={{ pathname: "/" }} />}
      {addingTodoEnded && <Redirect to={{ pathname: "/" }} />}
      <PageTitle>NEW TODO</PageTitle>
      <form onSubmit={(evt) => handleSubmitForm(evt)}>
        <FormGroup>
          <Label>Title <sup>*</sup> </Label>
          <TextInputElement type={INPUT_TYPES.TEXT} value={todoTitle} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => handleChangeTodoTitleInput(evt)} />
          <ErrorLabel>{!formValidation.todoTitle && 'The title is required'}</ErrorLabel>
        </FormGroup>
        <FormGroup>
          <Label>Due Date</Label>
          <DatePicker
            selected={dueDate}
            onChange={(date: any) => setDueDate(date)}
            minDate={subDays(new Date(), 0)}
            className="datepickerInput"
          />
          <ErrorLabel>{!formValidation.dueDate && 'Wrong date.'}</ErrorLabel>
        </FormGroup>
        <FormGroup>
          <Label>Due Time</Label>
          <DatePicker
            selected={dueTime}
            onChange={(date: any) => setDueTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeCaption="Due Time"
            dateFormat="h:mm:aa"
            className="datepickerInput"
            placeholderText="Enter due time"
          />
        </FormGroup>
        <FormGroup>
          <Label>Repeat Interval</Label>
          <Select options={options} className="reactSelect" value={repeatInterval} onChange={(option) => setRepeatInterval(option)} />
        </FormGroup>
        <FormGroup textAlign="center">
          {!addingTodoStarted && (
            <Button type={BUTTON_TYPES.CANCEL} onClick={() => setListTodos(true)}>
              Cancel
            </Button>
          )}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button disabled={addingTodoStarted} type={BUTTON_TYPES.SUBMIT} onClick={() => handleSubmitButton()}>
            {!addingTodoStarted ? 'Submit' : 'Please wait...'}
          </Button>
        </FormGroup>
      </form>
    </React.Fragment>
  )
}

export default AddTodoContainer
