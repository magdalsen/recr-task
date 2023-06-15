import { Link, useLocation } from 'react-router-dom'
import style from './Breadcrumbs.module.css'
import { useTableContext } from '../contexts/TableContext';
import { Breadcrumb, BreadcrumbItem, TabList, Tabs } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

function Breadcrumbs() {
  const location = useLocation();
  const { movies } = useTableContext();
  let currentLink = '';

  const crumbs = location.pathname.split('/')
  .filter(crumb => crumb !== '')
  .map(crumb => {
      return currentLink += `/${crumb}`;

  })

  return (
    <Tabs>
        <TabList>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <Link to={"/"}
                    className={location.pathname === "/" ? style.breadcrumbActive : style.breadcrumbNotActive}
                >
                    Home
                </Link>
            </BreadcrumbItem>

            {crumbs.map((el,i)=>(
                <BreadcrumbItem>
                    <Link to={el} key={el}
                        className={location.pathname === el ? style.breadcrumbActive : style.breadcrumbNotActive}
                    >
                        Path {i}
                    </Link>
                </BreadcrumbItem>
            ))}

        </Breadcrumb>
        </TabList>
    </Tabs>
  );
}

export default Breadcrumbs;