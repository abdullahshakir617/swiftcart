import loading from './loading.gif'

const Spinner = () => {

    return (
        <div className="text-center" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <img className="my-3" src={loading} alt="loading" />
        </div>
    )

}

export default Spinner
