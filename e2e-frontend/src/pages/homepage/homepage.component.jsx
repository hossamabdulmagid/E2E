import {RapperHomePageComponent} from "./homepage.styles";

const HomePage = () => {
    return (
        <RapperHomePageComponent>

            <div className={'container text-center mt-xl-4'}>
                <h2>
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
                </h2>
            </div>
        </RapperHomePageComponent>
    )
}

export default HomePage;