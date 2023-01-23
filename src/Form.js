import Button from './Button'
const Form = ({reqType, setreqType}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText="users"
                reqType={reqType}
                setReqType={setreqType}
            />
            <Button
                buttonText="posts"
                reqType={reqType}
                setReqType={setreqType}
            />
            <Button
                buttonText="comments"
                reqType={reqType}
                setReqType={setreqType}
            />
        </form>
        )}

    export default Form