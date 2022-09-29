import {BouncyDiv, BouncyFlip} from "./homepage.styles";

const HomePage = () => {
    return (
        <>
            <BouncyDiv className={'container text-center mt-xl-4'}>
                <h1>
                    Hossam Abdulmaged
                    <p>
                        Front-End developer with 4 year's experience and interested in new techniques for web
                        development,
                        have a knowledge API'S with coding using react js and state management such as redux , version
                        control system such as git , Bootstrap CSS framework & others CSS preprocessor
                        such as Sass and Styled Components
                    </p>
                </h1>
            </BouncyDiv>
            <BouncyFlip className={'container text-center mt-xl-4'}>
                <h1>
                    <strong style={{display: 'block'}}>
                        *TASK*
                    </strong>
                    E2E Application development
                    <p>
                        Description
                        Develop a simple CRUD application containing a web portal consuming a service layer using
                        a database to store the data.
                        Evaluation
                        Code should be shared using public github repository.
                        Application will be run execution the command “docker-compose up” and it should be
                        accessible from url “http://localhost:8080”
                    </p>

                </h1>

            </BouncyFlip>
        </>
    )
}

export default HomePage;