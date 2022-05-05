import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

function Recipes() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions')

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const res = await data.json();
        setDetails(res);
        console.log(res);
    }

    useEffect(() => {
        fetchDetails();
    },[params.name])

    return(
        <DetailWrapper>
            <div className="imageBox">
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>

            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} 
                onClick={() => setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''}
                onClick={() => setActiveTab('ingredients')}>Ingredients</Button>

                {activeTab === 'instructions' && (
                    <div>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                    <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                </div>
                )}

                {activeTab === 'ingredients' && (
                    <ul>
                    {details.extendedIngredients.map((e) => {
                        return(
                            <li>{e.original}</li>
                        )
                    })}
                </ul>
                )};
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    // background-color: green;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    .imageBox {
        margin-right: 2rem;
    }

    img {
        
    }

    p {
        margin-bottom: 1rem;
        margin-top: 2rem;
    }

    li {
        font-size: 1.1rem;
        line-height: 2rem;
    }

    ul {
        margin-top: 1.4rem;
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 0.5rem;
    font-weight: 600;
    cursor: pointer;
`;

const Info = styled.div`
    // background-color: yellow;
`;

export default Recipes