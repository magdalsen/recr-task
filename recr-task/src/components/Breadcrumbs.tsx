import { Link, useLocation } from 'react-router-dom'
import style from './Breadcrumbs.module.css'
import { Breadcrumb, BreadcrumbItem, TabList, Tabs } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

function Breadcrumbs() {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname.split('/')
  .filter(crumb => crumb !== '')
  .map(crumb => {
      return currentLink += `/${crumb}`;

  })

  return (
    <Tabs>
        <TabList>
        <Breadcrumb spacing='10px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <Link to={"/"}
                    className={location.pathname === "/" ? style.breadcrumbActive : style.breadcrumbNotActive}
                >
                    Home
                </Link>
            </BreadcrumbItem>

            {crumbs.map((el,i)=>(
                <BreadcrumbItem key={el}>
                    <Link to={el} key={el}
                        className={location.pathname === el ? style.breadcrumbActive : style.breadcrumbNotActive}
                    >
                        {
                            (i===0 ? 'Movie' : '') || 
                            ((i===1 && el.includes('reviews') ? 'Reviews' : '') || (i===1 ? 'Collection' : '')) || 
                            (i===2 ? 'Details' : '')
                        }
                    </Link>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
        </TabList>
    </Tabs>
  );
}

export default Breadcrumbs;