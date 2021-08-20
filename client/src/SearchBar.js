import { Container, Form, Button } from "react-bootstrap"
import ToggleButton from "./ToggleButton"

export default function SearchBar( {platformSlug, setPlatformSlug, platformUserIdentifier, setPlatformUserIdentifier} ) {
    const onFormSubmit = e => {
        e.preventDefault()
        e.stopPropagation();
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        if (platformSlug === formDataObj.value) return
        setPlatformSlug(formDataObj.value)
        // console.log(platformSlug + " " + formDataObj.value)
    }

    return (
        <>
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
            <div className="d-flex flex-row">
                <ToggleButton platformUserIdentifier={platformUserIdentifier} setPlatformUserIdentifier={setPlatformUserIdentifier}  />
                <Form className="d-flex" onSubmit={onFormSubmit}>
                    <Form.Control required type="text" name="value" />
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>    
        </Container>
        </>
    )
}
