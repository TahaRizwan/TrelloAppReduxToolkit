import DragContext from '../components/DragContext'
const Main = () => {
  return (
    <>
      <main className='list-container'>
        <section className='list-wrapper'>
          <div className='list-draggable'>
            <DragContext />
          </div>
        </section>
      </main>
    </>
  )
}

export default Main
