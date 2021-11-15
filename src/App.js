import React, { useEffect, useRef, useState } from 'react'
import { useForm } from './useForm'

const App = () => {
	console.log('app is rendered')

	const [count, setCount] = useState(0)
	const [name, setName] = useState('')
	const [age, setAge] = useState(0)
	const [state, setState] = useState({
		nagan: '',
		tawen: 0,
		kasarian: '',
	})

	const initialValues = {
		pangalan: '',
		edad: 0,
	}

	const [values, handleOnPalit] = useForm(initialValues)

	const { nagan, tawen, kasarian } = state
	const inputRef = useRef()

	const increment = () => {
		// setCount(count + 1)
		setCount((prevCount) => prevCount + 1)
	}

	const handleOnChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value, //[e.target.name] 'name' is ung attr, hindi ung value ng name
		})
	}

	useEffect(() => {
		// console.log('rendered by useEffect')
		// console.log('Input: ', inputRef.current.value) //e.target
		inputRef.current.focus()
	}, [])

	console.log('name: ', name)
	console.log('age: ', age)
	console.log('state: ', state)
	console.log('values: ', values)

	return (
		<div>
			<h1>Count: {count}</h1>
			<input name='name' ref={inputRef} />
			<button onClick={increment}>Increment</button>
			<br />
			<input
				name='name'
				placeholder='Enter Name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				name='age'
				placeholder='Enter Age'
				value={age}
				onChange={(e) => setAge(e.target.value)}
			/>
			<br />
			<br />
			<input
				name='nagan'
				placeholder='Enter Nagan'
				value={nagan}
				onChange={handleOnChange}
			/>
			<input
				name='tawen'
				placeholder='Enter Tawen'
				value={tawen}
				onChange={handleOnChange}
			/>
			<input
				name='kasarian'
				placeholder='Enter Kasarian'
				value={kasarian}
				onChange={handleOnChange}
			/>

			<br />
			<br />
			<input
				name='pangalan'
				placeholder='Enter pangalan'
				// value={pangalan}
				onChange={handleOnPalit}
			/>
			<input
				name='edad'
				placeholder='Enter Edad'
				// value={edad}
				onChange={handleOnPalit}
			/>
		</div>
	)
}

export default App
