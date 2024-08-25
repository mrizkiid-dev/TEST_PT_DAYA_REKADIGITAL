import { NavLink } from "react-router-dom"
import { Category2, BatteryFull, Profile2User, Reserve, MouseSquare, Document, UserSquare, Candle, ShoppingCart, Truck } from 'iconsax-react';
import logo from '../assets/images/icons/logo-square.svg'
import logoutImg from '../assets/images/icons/logout.svg'
import PropTypes from 'prop-types';
import ROUTES from "../utils/route";
function SideBar() {

    const ButtonDashboard = ({path, title, notification, renderItem}) => {
        return (
            <NavLink to={path}>
                {({ isActive }) => 
                    <div className="flex flex-row items-center gap-[12px] w-full justify-start">
                        {renderItem({isActive})}
                        <span className={`text-[16px] font-[600] ${isActive ? 'text-secondary' : 'text-disable'}`}>{title}</span> 
                        <span className={`flex items-center justify-center w-[19px] h-[18px] rounded-full bg-center bg-gradient-to-r from-[#EEA849] to-[#F46B45] text-[11px] text-primary ${(notification < 1) ? 'invisible' : ''}`}>
                            { notification }
                        </span>
                    </div>
                }
            </NavLink>
        )
    }
    ButtonDashboard.propTypes = {
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        notification: PropTypes.number.isRequired,
        renderItem: PropTypes.func.isRequired
    };

    const getLinkColor = ({ isActive = false }) => {
        return isActive ? '#5D5FEF' : '#98949E'
    }


    return (
        <div className="flex flex-col h-svh border-r border-border_color justify-between">
            <div className="flex flex-col px-[24px]">
                <div id="icon" className="flex flex-row my-[30px] items-baseline gap-1 text-secondary">
                    <img src={logo} alt="logo-square" width="24px"/>
                    <span className="font-[700] text-[28px] leading-[35px]">
                        square
                    </span>
                </div>

                <p className="mb-[8px] text-[14px] text-[#98949E] leading-[20px]">
                    Menu
                </p>

                <nav className="flex flex-col">
                <ol className="list-none flex flex-col gap-[28px]">
                    <li>
                        <ButtonDashboard path={ROUTES.menu.dashboard} title="Dashboard" notification={4} 
                            renderItem={
                                ({isActive}) => <Category2 size="16" variant="Bulk" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                    <li>
                        <ButtonDashboard path={ROUTES.menu.stock} title="Stock" notification={0} 
                            renderItem={
                                ({isActive}) => <BatteryFull size="16" variant="Bulk" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                    <li>
                        <ButtonDashboard path={ROUTES.menu.customer.path} title="Customer" notification={0} 
                            renderItem={
                                ({isActive}) => <Profile2User size="16" variant="Bulk" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                    <li>
                        <ButtonDashboard path={ROUTES.menu.restaurant} title="Restaurant" notification={0} 
                            renderItem={
                                ({isActive}) => <Reserve size="16" variant="TwoTone" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                    <li>
                        <ButtonDashboard path={ROUTES.menu.design} title="Design" notification={0} 
                            renderItem={
                                ({isActive}) => <MouseSquare size="16" variant="TwoTone" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                    <li>
                        <ButtonDashboard path={ROUTES.menu.report} title="Report" notification={0} 
                            renderItem={
                                ({isActive}) => <Document size="16" variant="TwoTone" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                    <li>
                        <ButtonDashboard path={ROUTES.menu.roleAdmin} title="Role & Admin" notification={0} 
                            renderItem={
                                ({isActive}) => <UserSquare size="16" variant="TwoTone" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                    <li>
                        <ButtonDashboard path={ROUTES.menu.settings} title="Settings" notification={0} 
                            renderItem={
                                ({isActive}) => <Candle size="16" variant="TwoTone" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                    <li>
                        <ButtonDashboard path={ROUTES.inregation.stock} title="Stock" notification={0} 
                            renderItem={
                                ({isActive}) => <ShoppingCart size="16" variant="TwoTone" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                    <li>
                        <ButtonDashboard path={ROUTES.inregation.supply} title="Supply" notification={0} 
                            renderItem={
                                ({isActive}) => <Truck size="16" variant="TwoTone" color={getLinkColor({isActive})}/>
                        } />
                    </li>
                </ol>
                <div>

                </div>
                </nav>
            </div>

            <div id="profile" className="border-t border-border_color py-[24px]">
                <div className="flex flex-col gap-3 px-[24px]">
                    <div id="profile-detail" className="flex flex-row gap-1">
                        <div className="w-[40px] h-[40px] bg-secondary rounded-full">
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="leading-[23px] text-[16px] text-text font-[600px] overflow-ellipsis">Savannah H</p>
                            <p className="text-[12px] text-disable leading-[20px] overflow-ellipsis">Food Quality Manager</p>
                        </div>
                    </div>
                    <div id="logout" className="px-[24px] bg-[#FEF5F6] rounded-[4px]">
                        <div className="flex flex-row justify-center gap-1 text-[16px] leading-[18px] font-[600] text-[#8F0A13] py-[8px]">
                            <img src={logoutImg} alt="logut" width="22px"/>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar