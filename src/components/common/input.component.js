const Input = ({type, id, value, handleChange, error}) => {
    return (
        <>
            <input
                type={type}
                className="form-control"
                id={id}
                onChange={handleChange}
                value={value}
            />
            {error && <div className='invalid-feedback d-block'>{error}</div>}
        </>

    )
}
export default Input