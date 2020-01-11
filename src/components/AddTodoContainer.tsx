import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Select, { ValueType } from 'react-select'
import { Redirect } from 'react-router-dom'
import { subDays, isValid } from 'date-fns'
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
  const addingTodo = useSelector((state: IDataStore) => state.todos.adding)
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

  const handleSubmitForm = () => {
    let formBody = {}

    if (!todoTitle) {
      return setFormValidation({ ...formValidation, todoTitle: false })
    } else {
      formBody = Object.assign({}, formBody, { title: todoTitle })
    }

    if (dueDate && !isValid(dueDate)) {
      return setFormValidation({ ...formValidation, dueDate: false })
    } else if (dueDate) {
      formBody = Object.assign({}, formBody, { dueDate })
    }

    if (dueTime && !isValid(dueTime)) {
      return setFormValidation({ ...formValidation, dueTime: false })
    } else if (dueTime) {
      formBody = Object.assign({}, formBody, { dueTime })
    }

    dispatch(addTodo(formBody))
  }

  if (listTodos) {
    return <Redirect to="/" />
  }

  return (
    <React.Fragment>
      <PageTitle>NEW TODO</PageTitle>
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
        <Button disabled={addingTodo} buttonType={BUTTON_TYPES.SUBMIT} onClick={() => handleSubmitForm()}>
          {!addingTodo ? 'Submit' : 'Please wait...'}
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {!addingTodo && (
          <Button buttonType={BUTTON_TYPES.CANCEL} onClick={() => setListTodos(true)}>
            Cancel
        </Button>
        )}

      </FormGroup>
    </React.Fragment>
  )
}

export default AddTodoContainer
