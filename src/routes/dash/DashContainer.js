import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Doughnut, Bar } from 'react-chartjs-2';
import k8s_logo from '../images/logo-key-kubernetes.png';
import openstack_logo from '../images/openstack_logo.png';
import cloud_icon from '../images/cloud-icon.png';
import './Chart.PieceLabel.js';
import './chart_extension.js';
import computeImage from '../images/icon-compute.png'
import memoryImage from '../images/icon-memory.png'
import storageImage from '../images/icon-storage.png'
import networksImage from '../images/icon-network.png'

class K8sDashboard extends Component{
    constructor(props){
        super(props);
        console.log("constractor")
        this.state={
            labels: [
                'Openstack',
                'Kubernetes',
            ],
            datasets: [{
                data: [300, 50],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                ]
            }]
        }

        this.itemServers = this.itemServers.bind(this);
        this.itemStorage = this.itemStorage.bind(this);
        this.itemNetworks = this.itemNetworks.bind(this);
        this.itemRegions = this.itemRegions.bind(this);
    }

    onSubmit= (e)=>{
        e.preventDefault(); //서버로 서브밋 되는것을 막는다

        const username = this.username;
        const password = this.password;

        console.log(username);
        console.log(password);

        
        /*this.props.dispatch({type:"ADD_POST", data:{writer:writer, 
                                                    contents:contents,
                                                  title:title}});
         */
        // this.props.dispatch(insert({writer:writer,
        //                             contents:contents,
        //                             title:title}));

    }
    itemServers()
    {
        return(
            <div className="col-md-3 dashboard-item ml-2">
                    <div className="text-muted mt-3 p-1 bg-white d-flex justify-content-between">
                        <h3 className="my-auto">Servers</h3>
                        <img src={computeImage} alt="logo" className="item-logo my-auto"></img>
                    </div>
                    <div className="bg-white mt-2 pb-2">
                        <Doughnut
                            data={{
                                labels: this.state.labels,
                                datasets: this.state.datasets
                            }}
                            width={200}
                            height={200}
                            options={{ 
                                responsive: true,
	                            legend: false,
                                maintainAspectRatio: false,
                                animation: false,
                                pieceLabel: {
                                        mode:"value",
                                        fontSize: 16,
                                        fontStyle: 'bold',
                                        fontColor:'white',
                                        // font family, default is defaultFontFamily
                                        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                                    },
                                    elements: {
                                        center: {
                                          text: 25,
                                          fontStyle: 'Helvetica', //Default Arial
                                          sidePadding: 15 //Default 20 (as a percentage)
                                      }
                                    },
                                 }}
                        />
                    </div>
                    <div className="bg-white mt-2 mb-3 pt-2 pl-2">
                        <div>
                            <label className="switch mr-2">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                            <img src={k8s_logo} alt="logo" className="item-logo"></img>
                            <span className="text-center">Kubernetes</span>
                        </div>
                        <div>
                            <label className="switch mr-2">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                            <img src={openstack_logo} alt="logo" className="item-logo"></img>
                            <span className="text-center">Openstack</span>
                        </div>
                    </div>
                </div>
        )
    }
    itemStorage()
    {
        var chartData={
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [50, 200, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        }
        return(
            <div className="col-md-3 dashboard-item ml-2">
                    <div className="text-muted mt-3 p-1 bg-white d-flex justify-content-between">
                        <h3 className="my-auto">Storage</h3>
                        <img src={storageImage} alt="logo" className="item-logo my-auto"></img>
                    </div>
                    <div className="bg-white mt-2 pb-2">
                        <Doughnut
                            data={{
                                labels: chartData.labels,
                                datasets: chartData.datasets
                            }}
                            width={200}
                            height={200}
                            options={{ 
                                responsive: true,
	                            legend: false,
                                maintainAspectRatio: false,
                                animation: true,
                                        pieceLabel: {
                                        mode:"value",
                                        fontSize: 16,
                                        fontStyle: 'bold',
                                        fontColor:'white',
                                        // font family, default is defaultFontFamily
                                        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
                                    },
                                    elements: {
                                        center: {
                                          text: 25,
                                          fontStyle: 'Helvetica', //Default Arial
                                          sidePadding: 15 //Default 20 (as a percentage)
                                      }
                                    },
                                 }}
                        />
                    </div>
                    <div className="bg-white mt-2 mb-3 pt-2 pl-2">
                        <div>
                            <label className="switch mr-2">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                            <img src={k8s_logo} alt="logo" className="item-logo"></img>
                            <span className="text-center">Kubernetes</span>
                        </div>
                        <div>
                            <label className="switch mr-2">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                            <img src={openstack_logo} alt="logo" className="item-logo"></img>
                            <span className="text-center">Openstack</span>
                        </div>
                    </div>
                </div>
        )
    }
    itemNetworks()
    {
        var chartData={
            labels: [
                'Openstack',
                'Kubernetes',
            ],
            datasets: [{
                data: [200, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                ]
            }]
        }
        return(
            <div className="col-md-3 dashboard-item ml-2">
                    <div className="text-muted mt-3 p-1 bg-white d-flex justify-content-between">
                        <h3 className="my-auto">Networks</h3>
                        <img src={networksImage} alt="logo" className="item-logo my-auto"></img>
                    </div>
                    <div className="bg-white mt-2 pb-2">
                       <Bar
                       data={{
                            labels: chartData.labels,
                            datasets: chartData.datasets
                        }}
                        width={200}
                        height={200}
                        options={{ 
                            responsive: true,
                            legend: false,
                            maintainAspectRatio: false,
                            animation: true,
                            scales:{
                                yAxes: [{
                                    ticks: {
                                    beginAtZero: true
                                    }
                                }]
                                }
                            }}
                        />
                    </div>
                    <div className="bg-white mt-2 mb-3 pt-2 pl-2">
                        <div>
                            <label className="switch mr-2">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                            <img src={k8s_logo} alt="logo" className="item-logo"></img>
                            <span className="text-center">Kubernetes</span>
                        </div>
                        <div>
                            <label className="switch mr-2">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                            <img src={openstack_logo} alt="logo" className="item-logo"></img>
                            <span className="text-center">Openstack</span>
                        </div>
                    </div>
                </div>
        )
    }
    itemRegions()
    {
        return(
            <div className="col-md-3 dashboard-item ml-2">
                    <div className="text-muted mt-3 p-1 bg-white d-flex justify-content-between">
                        <h3 className="my-auto">Regions</h3>
                        <img src={memoryImage} alt="logo" className="item-logo my-auto"></img>
                    </div>
                    <div className="bg-white mt-2" align="center">
                        <span className="region-count">12</span>
                        <img src={cloud_icon} alt="cloud img" className="w-75"></img>
                    </div>
                    <div className="bg-white mt-2 mb-3 pt-2 pl-2">
                        <div>
                            <label className="switch mr-2">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                            <img src={k8s_logo} alt="logo" className="item-logo"></img>
                            <span className="text-center">Kubernetes</span>
                        </div>
                        <div>
                            <label className="switch mr-2">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                            <img src={openstack_logo} alt="logo" className="item-logo"></img>
                            <span className="text-center">Openstack</span>
                        </div>
                    </div>
                </div>
        )
    }
    render(){
        return(
            <div className="d-flex justify-content-around container mt-3">
                <this.itemServers/>
                <this.itemStorage/>
                <this.itemNetworks/>
                <this.itemRegions/>
            </div>
        )
    }
}

export default K8sDashboard;
