import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { searchIgniter } from '../igniters';
import SearchItem from '../components/SearchItem';
import gridSystem from '../components/_SassLib/Grid/Grid.scss';
import CategoriesBreadcrumb from '../components/CategoriesBreadcrumb';

const Item = props => (
  <Fragment>
    <CategoriesBreadcrumb />
    <div className={`${gridSystem.mainGrid}`}>
      <div className={`${gridSystem.mainGrid_contentBox}`}>
        {props.items.map(item => (
          <SearchItem item={item} key={item.id} />
        ))}
        {props.items.length === 0 && <div>Ningún resultado para la busqueda.</div>}
      </div>
    </div>
  </Fragment>
);

Item.propTypes = {
  items: PropTypes.array.isRequired
};

Item.getInitialProps = searchIgniter;

export default Item;
