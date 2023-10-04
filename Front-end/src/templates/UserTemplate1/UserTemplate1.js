
import { Fragment } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Header from './Header/Header';
import MucLuc from './MucLuc/MucLuc';
import Footer from './Footer/Footer';





export const UserTemplate1 = (props) => {
    const { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {    
            return <div className='page_bg'>
                      <Header />
                      <Component {...propsRoute} />
                     {/* <MucLuc /> */}
                    <Footer />
            </div>
        
       
    }} />
}

