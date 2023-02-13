import { useState, useEffect } from 'react';
import { useParams, useNavigate   } from "react-router-dom";
import JoblyApi from '../api/api'
import JobCardList from "../jobs/JobCardList";
import LoadingSpinner from "../helpers/LoadingSpinner";

const Company = () =>{
    const { id } = useParams();
    const navigate = useNavigate()
    const [company, setCompany] = useState ({})
 
    useEffect(() => {
      async function getCompany (handle){
        try {
            let data = await JoblyApi.getCompany(handle);
            setCompany(data);
          } catch (error) {
            console.log(error);
            alert(`${id} not found.`)
            navigate('/companies')
          }
      }
      getCompany(id)
    }, [id, navigate]);

    if (!company) return <LoadingSpinner />;

    return(
    <div>
        <p>{company.name}</p>
        <p>{company.description}</p>        
        <div>
            {company.jobs && company.jobs.length > 0 
            ? (<JobCardList jobs={company.jobs} />)
            :(
            <div>
              <p>{id} not found.</p>
            </div>
          )}
        </div>
    </div>
    )
}

export default Company;
