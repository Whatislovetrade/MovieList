import './add-movie-btn.css'

const AddMovieBtn = ({onClick}) => {
    return (
        <button onClick={onClick} className='btn btn-outline-secondary me-2 btn-lg add-movie-btn'>Добавить фильм</button>
    )
}

export default AddMovieBtn