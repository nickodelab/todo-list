import { render, screen, fireEvent, waitFor } from './test-utils'
import '@testing-library/jest-dom/'
import { todoListInitialState } from '../redux/reducers/todo'

import App from '../components/App'

beforeEach(() => render(<App />, { initialState: { todoList: todoListInitialState } }))

test('"/" - it should render the homepage', () => {
    const headerNode = screen.getByRole('banner')

    const todoTitleNode = screen.getByRole('heading', { name: /awesome todo list/i })
    const inputNode = screen.getByRole('textbox', { name: /create item/i })
    const iconButtonNode = screen.getByRole('button', { name: /create/i })

    expect(headerNode).toBeInTheDocument()
    expect(todoTitleNode).toBeInTheDocument()
    expect(inputNode).toBeInTheDocument()
    expect(iconButtonNode).toBeInTheDocument()

    expect(inputNode).toHaveFocus()
    expect(iconButtonNode).toBeDisabled()
})


test('"/" - it should add 3 item', () => {
    const inputNode = screen.getByRole('textbox', { name: /create item/i })
    const iconButtonNode = screen.getByRole('button', { name: /create item/i })

    const itemsContent = [
        'React Testing Library',
        'Accessibility',
        'Agile development',
    ]

    itemsContent.map(itemText => createItem(inputNode, iconButtonNode, itemText))

    const itemsNodes = screen.getAllByRole('listitem')

    expect(itemsNodes.length).toBe(3)

    itemsNodes.forEach((itemNode, index) => expect(itemNode).toHaveTextContent(itemsContent[index]))
})

test('"/" - it should edit 1 element', async () => {
    const inputNode = screen.getByRole('textbox', { name: /create item/i })
    const iconButtonNode = screen.getByRole('button', { name: /create item/i })

    const itemsContent = [
        'React Testing Library',
        'Accessibility',
        'JSS Styles are great',
    ]

    itemsContent.map(itemText => createItem(inputNode, iconButtonNode, itemText))

    const itemsNodes = screen.getAllByRole('listitem')
    expect(itemsNodes.length).toBe(3)

    itemsNodes.forEach((itemNode, index) => expect(itemNode).toHaveTextContent(itemsContent[index]))

    fireEvent.click(screen.getAllByRole('listitem')[1])

    const editInputNode = screen.getByRole('textbox', { name: /edit item/i })
    expect(editInputNode).toHaveValue(itemsContent[1])

    fireEvent.change(editInputNode, { target: { value: `${itemsContent[1]} - NEW` } })

    const saveButton = screen.getByText(/save/i)
    fireEvent.click(saveButton)
    const newItemsNodes = screen.getAllByRole('listitem')
    expect(newItemsNodes[1]).toHaveTextContent(`${itemsContent[1]} - NEW`)

})

// createItem() could be created another place
const createItem = (inputNode, iconButtonNode, itemText) => {
    expect(inputNode).not.toHaveValue()
    expect(iconButtonNode).toBeDisabled()

    fireEvent.change(inputNode, { target: { value: itemText } })

    expect(inputNode).toHaveValue(itemText)
    expect(iconButtonNode).not.toBeDisabled()

    fireEvent.click(iconButtonNode)

    expect(inputNode).not.toHaveValue()
    expect(iconButtonNode).toBeDisabled()
}