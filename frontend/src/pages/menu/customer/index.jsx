import plusAdd from "@/assets/images/icons/plus-add.svg"
import { SearchNormal, Filter, Refresh2, Printer } from "iconsax-react"
import PropsTypes from "prop-types"
import DataTable from "react-data-table-component"
import sortIcon from "@/assets/images/icons/sort.svg"
import useCustomerStore from "@/store/use_customer_store"
import { useEffect } from "react"

function CustomerIndexPage() {
    const { data: dataStore, loading, error, storeGetTransactionWithCustomer } = useCustomerStore();
    useEffect(() =>  {
        console.log('trigger');
        storeGetTransactionWithCustomer()
    }, [storeGetTransactionWithCustomer]);

    console.log('data = ',dataStore);
    console.log('loading = ',loading);
    console.log('error = ',error);
    

    const onSubmitSearch = (e) => {
        e.preventDefault()
    }

    const SortIcon = ({ isSortAsc }) => {
        if (isSortAsc) return <img src={sortIcon} />;
        if (isSortAsc === false) return <img src={sortIcon} />;
        return <img src={sortIcon} />;
    };
    SortIcon.propTypes = {
        isSortAsc: PropsTypes.bool
    }

    const caseInsensitiveSort = (rowA, rowB, selector, direction) => {
        const a = selector(rowA).toLowerCase();
        const b = selector(rowB).toLowerCase();
    
        if (a < b) return direction === 'asc' ? -1 : 1;
        if (a > b) return direction === 'asc' ? 1 : -1;
        return 0;
    };

    const columns = [
        {
            name: 'Customer Name',
            selector: row => row.customerName,
            sortable: true,
            sortFunction: (rowA, rowB, direction) => caseInsensitiveSort(rowA, rowB, row => row.customerName, direction),
        },
        {
            name: 'Level',
            selector: row => row.level,
            sortable: true,
            sortFunction: (rowA, rowB, direction) => caseInsensitiveSort(rowA, rowB, row => row.level, direction),
        },
        {
            name: 'Favorite Menu',
            selector: row => row.favoriteMenu,
            sortable: true,
            sortFunction: (rowA, rowB, direction) => caseInsensitiveSort(rowA, rowB, row => row.favoriteMenu, direction),
        },
        {
            name: 'Total Transaction',
            selector: row => row.totalTransaction,
            sortable: true,
            sortFunction: (rowA, rowB, direction) => {
                const a = rowA.totalTransaction;
                const b = rowB.totalTransaction;
                return direction === 'asc' ? a - b : b - a;
            },
        },
        {
            name: 'Action',
            selector: row => row.action,
        },
    ];

    const data = []

    if(dataStore) {
        dataStore.forEach(customer => {
            data.push({ 
                id: customer.id, 
                customerName: customer.customer_name, 
                level: customer.customer_level, 
                favoriteMenu: customer.customer_favoriteMenu, 
                totalTransaction: 1200, 
                action: 'Buy' })
        });
    }

    
    // const data = [
    //     { id: 1, customerName: 'John Doe', level: 'Gold', favoriteMenu: 'Pizza', totalTransaction: 1200, action: 'Buy' },
    //     { id: 2, customerName: 'Jane Smith', level: 'Silver', favoriteMenu: 'Burger', totalTransaction: 800, action: 'Sell' },
    //     { id: 3, customerName: 'Emily Johnson', level: 'Bronze', favoriteMenu: 'Sushi', totalTransaction: 450, action: 'Buy' },
    //     { id: 4, customerName: 'Michael Brown', level: 'Gold', favoriteMenu: 'Pasta', totalTransaction: 1350, action: 'Buy' },
    //     { id: 5, customerName: 'Sarah Davis', level: 'Platinum', favoriteMenu: 'Steak', totalTransaction: 2000, action: 'Sell' },
    //     { id: 6, customerName: 'David Wilson', level: 'Silver', favoriteMenu: 'Tacos', totalTransaction: 950, action: 'Buy' },
    //     { id: 7, customerName: 'Laura Martinez', level: 'Bronze', favoriteMenu: 'Salad', totalTransaction: 320, action: 'Sell' },
    //     { id: 8, customerName: 'James Anderson', level: 'Gold', favoriteMenu: 'Burger', totalTransaction: 1100, action: 'Buy' },
    //     { id: 9, customerName: 'Olivia Thomas', level: 'Platinum', favoriteMenu: 'Lobster', totalTransaction: 2500, action: 'Sell' },
    //     { id: 10, customerName: 'Daniel Lee', level: 'Silver', favoriteMenu: 'Pizza', totalTransaction: 850, action: 'Buy' },
    //     { id: 11, customerName: 'Sophia White', level: 'Gold', favoriteMenu: 'Pasta', totalTransaction: 1200, action: 'Sell' },
    //     { id: 12, customerName: 'Matthew Harris', level: 'Bronze', favoriteMenu: 'Wings', totalTransaction: 400, action: 'Buy' },
    //     { id: 13, customerName: 'Isabella Clark', level: 'Silver', favoriteMenu: 'Sushi', totalTransaction: 770, action: 'Sell' },
    //     { id: 14, customerName: 'Ethan Lewis', level: 'Gold', favoriteMenu: 'Steak', totalTransaction: 1450, action: 'Buy' },
    //     { id: 15, customerName: 'Mia Walker', level: 'Platinum', favoriteMenu: 'Shrimp', totalTransaction: 2200, action: 'Sell' },
    // ];
    

    
    function TableYeuh() {
        return (
            <DataTable 
                columns={columns}
                data={data}
                pagination
                
                // customStyles={tableCustomStyles}
                sortIcon={<img src={sortIcon} />}
            />
        );
    };

    const ButtonTransparent = ({imgSrc, title, children}) => {
        const Icon = () => {
            if (imgSrc) {
                return (
                    <img src={imgSrc} alt="plus" width="16px" height="16px"/>
                )
            }
            
            return children
        }

        const Title = () => {
            if(title) {
                return <span className="font-semibold text-[14px] leading-[21px]">{title}</span>
            }

            return <></>
        }
        return (
            <div className="px-4 py-2 rounded-lg bg-primary/20 backdrop-blur flex flex-row gap-3 items-center">
                <Icon />
                <Title />
            </div>
        )
    }
    ButtonTransparent.propTypes = {
        imgSrc: PropsTypes.string,
        title: PropsTypes.string,
        children: PropsTypes.element
    }
    
    return(
        <div className="flex flex-row gap-4 h-full">
            <main className="flex-1 flex flex-col">
                <div className="h-[170px] w-full text-primary rounded-lg bg-secondary p-3 flex flex-col gap-4">
                    <div>
                        <h3 className="text-xl leading-[30px]">Customer</h3>
                        <p className="text-xs w-[350px] leading-6">On this menu you will be able to create, edit, and also delete the customer. Also you can manage it easily.</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <ButtonTransparent imgSrc={plusAdd} title="Add New Customer"/>
                        <form className="flex-1 flex flex-row justify-between pl-4 py-1 pr-1 text-[14px] bg-primary rounded-lg" onSubmit={onSubmitSearch}>
                            <div className="flex flex-row items-center justify-center gap-4 w-full bg-primary pr-4">
                                <SearchNormal size="16px" color="#D1D0D3"/>
                                <input type="text" className="text-text focus:outline-none w-full" placeholder="Search Customer" />
                            </div>
                            <button className="px-4 py-2 rounded-lg bg-secondary text-primary">
                                <span className="text-primary">Search</span>
                            </button>
                        </form>
                        <ButtonTransparent title="Filter">
                            <Filter size="16px" color="#D1D0D3"/>
                        </ButtonTransparent>
                        <ButtonTransparent title="Refresh">
                            <Refresh2 size="16px" color="#D1D0D3"/>
                        </ButtonTransparent>
                        <ButtonTransparent>
                            <Printer size="16px" color="#D1D0D3"/>
                        </ButtonTransparent>
                    </div>
                </div>
                <div id="table">
                    <TableYeuh />
                </div>
            </main>

            <aside className="w-[230px] h-full border flex flex-col">
                <div className="h-[265px]">

                </div>

                <div className="">


                </div>
            </aside>

        </div>
    )
}

export default CustomerIndexPage