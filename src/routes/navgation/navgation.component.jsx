import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';


import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-drop-down/cart-drop-down.component';

import { NavigationContainer, LogoContainer, NavLink, NavLinks } from './navgation.styles.jsx';
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);



    return (
        <Fragment>
            <NavigationContainer >
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>

                    <NavLink to='/shop'>
                        shop
                    </NavLink>
                    {
                        currentUser ?
                            <NavLink as={'span'} onClick={signOutUser}>sign out</NavLink>
                            :
                            <NavLink to='/auth'>
                                sign in
                            </NavLink>
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;