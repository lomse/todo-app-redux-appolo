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
import { BUTTON_TYPES } from '../types/common'
import './styles.css'

const options: IDropdownOption[] = [
  { label: 'Never', value: '' },
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Yearly', value: 'Yearly' }
]

const defaultOption: IDropdownOption = { label: 'Never', value: '' }


const AddTodoContainer = () => {
  const [dueDate, setDueDate] = useState(new Date())
  const [dueTime, setDueTime] = useState(null)
  const [repeatInterval, setRepeatInterval] = useState<ValueType<IDropdownOption>>(defaultOption)
  const [listTodos, setListTodos] = useState(false)

  const handleSubmitForm = ()=> {
    
  }

  if (listTodos) {
    return <Redirect to="/" />
  }

  return (
    <React.Fragment>
      <PageTitle>NEW TODO</PageTitle>
      <FormGroup>
        <Label>Title</Label>
        <TextInputElement />
      </FormGroup>
      <FormGroup>
        <Label>Due Date</Label>
        <DatePicker
          selected={dueDate}
          onChange={(date: any) => setDueDate(date)}
          minDate={subDays(new Date(), 0)}
          className="datepickerInput"
        />
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
        <Button buttonType={BUTTON_TYPES.SUBMIT} onClick={() => handleSubmitForm()}>
          Submit
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button buttonType={BUTTON_TYPES.CANCEL} onClick={() => setListTodos(true)}>
          Cancel
        </Button>
      </FormGroup>
    </React.Fragment>
  )
}

export default AddTodoContainer
