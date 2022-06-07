import React,{useState} from 'react'
import Layout from '../../HOC/Layout/Layout'
import topCourse from '../../components/Resources/Icons/topCourse.svg';
import CertifiedTeacher from '../../components/Resources/Icons/CertifiedTeacher.svg';
import BookandLibraries from '../../components/Resources/Icons/BookandLibraries.svg';
import CompanyMoto from '../../components/PageComponent/HomePage/Companymoto/Moto'
function Index() {
    const [Moto, setMoto] = useState([
        {
            icon:topCourse,
            title:'Top Courses',
            description:`Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type 
             and scrambled it to make a type specimen book. It has survived not only five 
             centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.`
        },
        {
            icon:CertifiedTeacher,
            title:'Certified Teachers',
            description:`Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type 
             and scrambled it to make a type specimen book. It has survived not only five 
             centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.`
        },{
            icon:BookandLibraries,
            title:'Book and Libraries',
            description:`Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's standard dummy 
             text ever since the 1500s, when an unknown printer took a galley of type 
             and scrambled it to make a type specimen book. It has survived not only five 
             centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged.`
        },
    ])
    return (
        <div>
            <Layout>
                <div>
                    home page
                    <div className='grid grid-cols-3'>
                        {
                            Moto?.map((val,i)=>{
                                return <CompanyMoto key={i} title={val.title} description={val.description} icon={val.icon.src} />
                            })
                        }
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Index