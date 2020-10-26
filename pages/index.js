import { connect } from 'react-redux';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useEffect, useState } from 'react'
import { toast,ToastContainer } from 'react-nextjs-toast'
import {Page_titles,Headings,subHeadings} from '../constants/constants.js'

const {
    getSpacePrgrams, filterSpacePrograms } = require(`../redux/actions`);

function HomeScreen({ getSpacePrgrams, spaceProgramsList, filterSpacePrograms }) {
    let intialFilter = { launch_year: '', launch_success: '', land_success: '' }
    const [spaceProgramsResults, setSpaceProgramsResults] = useState([])
    const [filterValues, setFilterValues] = useState(intialFilter)
    const filterOptions = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

    useEffect(() => {
        getSpacePrgrams({ limit: 100 }, (msg) => {
            toast.notify(msg,{type: "error"})
        })

    }, [])

    useEffect(() => {
        setSpaceProgramsResults(spaceProgramsList)
    }, [spaceProgramsList])
    useEffect(() => {

    }, [spaceProgramsResults])

    const applyFilters = (filter, value) => {
        if (filter == 'reset') {
            setFilterValues(intialFilter)
        }
        else setFilterValues({ ...filterValues, [filter]: value })
    }
    useEffect(() => {
        filterSpacePrograms(filterValues, (msg) => {
            toast.notify(msg,{type: "error"})
        })
    }, [filterValues])

    return (
        <div className={styles.container}>
            <Head>
                <title>{Page_titles.SpaceProgram}</title></Head>
                <ToastContainer position={"bottom"} align={"center"} />
            <div className={styles.mainScreen}>
                <h3>{Page_titles.SpaceProgram}</h3>
                <main className={styles.main}>

                    <div className={styles.filter}>
                        <h6>{Headings.filters}</h6>
                        <p>{Headings.launchYear}</p>
                        <hr />
                        <div className={styles.filterOptions}>
                            {filterOptions.map((filter, index) => {
                                return <div key={index}><button className={filter === filterValues.launch_year ? 'active' : ''} onClick={() => applyFilters('launch_year', filter)}>{filter}</button></div>
                            })}
                        </div>

                        <p>{Headings.successfulLaunch}</p>
                        <hr />
                        <div className={styles.filterOptions}>
                            <div><button className={filterValues.launch_success ? 'active' : ''} onClick={() => applyFilters('launch_success', true)}>True</button></div>
                            <div><button className={!filterValues.launch_success ? 'active' : ''} onClick={() => applyFilters('launch_success', false)}>False</button></div>
                        </div>
                        <p>{Headings.successfulLanding}</p>
                        <hr />
                        <div className={styles.filterOptions}>
                            <div><button className={filterValues.land_success ? 'active' : ''} onClick={() => applyFilters('land_success', true)}>True</button></div>
                            <div> <button className={!filterValues.land_success ? 'active' : ''} onClick={() => applyFilters('land_success', false)}>False</button></div>
                        </div>
                        <p>{subHeadings.reset} </p>
                        <hr />
                        <div className={styles.resetFilter}>
                            <div> <button onClick={() => applyFilters('reset')}>{subHeadings.resetFilters}</button></div>
                        </div>
                    </div>
                    <div className={styles.grid}>

                        {spaceProgramsResults.length > 0 && spaceProgramsResults.map((program, index1) => {

                            return <div className={styles.gridItem} key={index1}>
                                <div className={styles.gridItemImg}>
                                    <img src={program.links.mission_patch} />
                                    <h6 className={styles.missionHeading}>{`${program.mission_name} #${program.flight_number}`}</h6>
                                    <h6 className={styles.missionInfo}>{Headings.missionIds}
                                <ul>
                                            {program.mission_id.map((id, index) => {
                                                return <li key={index}>{id}</li>
                                            })}
                                        </ul>
                                    </h6>
                                    <h6 className={styles.missionInfo}>{Headings.launchYear}: {program.launch_year}</h6>
                                    <h6 className={styles.missionInfo}>{Headings.successfulLaunch}: {program.launch_success ? 'true' : 'false'}</h6>
                                    <h6 className={styles.missionInfo}>{Headings.successfulLanding}: </h6>{program.launch_success}
                                </div>
                            </div>

                        })
                        }
                    </div>
                </main>

                <footer className={styles.footer}>
                    Developed by:  {'Avneet Kaur'}
                </footer>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        spaceProgramsList: state.SpacePrograms.spaceProgramsList
    });
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSpacePrgrams: (data, failure) => dispatch(getSpacePrgrams(data, failure)),
        filterSpacePrograms: (data, failure) => dispatch(filterSpacePrograms(data, failure))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);