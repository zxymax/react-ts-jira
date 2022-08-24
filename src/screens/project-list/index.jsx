import React, { useState, useEffect } from 'react'
import * as qs from 'qs'
import {cleanObject} from 'utils'
import { SearchPanel } from './search-panel'
import { List } from './list'

export const ProjectListScreen = () => {

  const [param, setParam] = useState([{
    name: '',
    personId: ''
  }])
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/projects?${qs.stringify(cleanObject(param))}`)
      .then(async (response) => {
        if (response.ok) {
          setList(await response.json())
        }
      } )
  }, [param])

  useEffect(() => {
    fetch('http://localhost:3001/users').then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}
