import React, { useState, useEffect } from 'react'
import * as qs from 'qs'
import {cleanObject, useMount, useDebounce} from 'utils'
import { SearchPanel } from './search-panel'
import { List } from './list'

export const ProjectListScreen = () => {

  const [param, setParam] = useState([{
    name: '',
    personId: ''
  }])
  const [users, setUsers] = useState([])

  const debouncedParam = useDebounce(param, 2000)
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/projects?${qs.stringify(cleanObject(debouncedParam))}`)
      .then(async (response) => {
        if (response.ok) {
          setList(await response.json())
        }
      } )
  }, [debouncedParam])

  useMount(() => {
    fetch('http://localhost:3001/users').then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}
