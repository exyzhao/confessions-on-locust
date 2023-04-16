import styled from "styled-components"

const notes = [
  "jo",
  "hi",
  "lo"
]

const PageContainer = styled.div`
  margin: 10px;
  padding: 10px 0;
  text-align: center;
`
const StickyNoteContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const StickyNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 200px;
  padding: 20px;
  background-color: pink;
  font-size: 24px;
`

const App = () => {
  return (
    <PageContainer>
      <h1>WHAT DO YOU REGRET</h1>
      <StickyNoteContainer>
        <StickyNote>
          <p>Je ne regrette rien</p>
        </StickyNote>
        <StickyNote>
          <p>Je ne regrette rien</p>
        </StickyNote>
        {notes.map(n => {
          return (
            <StickyNote><p>{n}</p></StickyNote>
          )
        })}
      </StickyNoteContainer>
    </PageContainer>
  )
}

export default App
