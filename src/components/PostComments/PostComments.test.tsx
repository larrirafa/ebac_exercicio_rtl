// src/components/PostComments/PostComments.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import PostComments from '.'

describe('<PostComments />', () => {
  it('deve permitir a insercao de dois comentarios', () => {
    render(<PostComments />)

    const textarea = screen.getByTestId('comment-textarea')
    const button = screen.getByTestId('comment-submit')

    // primeiro comentario
    fireEvent.change(textarea, { target: { value: 'Primeiro comentario de teste' } })
    fireEvent.click(button)

    // segundo comentario
    fireEvent.change(textarea, { target: { value: 'Segundo comentario de teste' } })
    fireEvent.click(button)

    const comentarios = screen.getAllByTestId('comment-item')

    expect(comentarios).toHaveLength(2)
    expect(comentarios[0]).toHaveTextContent('Primeiro comentario de teste')
    expect(comentarios[1]).toHaveTextContent('Segundo comentario de teste')
  })
})
