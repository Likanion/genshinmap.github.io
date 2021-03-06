import React from 'react';
import { connect } from 'react-redux';

import LeafletMap from '~/components/views/map/LeafletMap';
import MapControls from '~/components/views/controls/MapControls';

const _MainView = () => {
  return (
    <>
      <div className="map">
        <LeafletMap />
        <MapControls />
      </div>
    </>
  );
};

const mapStateToProps = (_state) => ({});
const mapDispatchToProps = (_dispatch) => ({});

const MainView = connect(mapStateToProps, mapDispatchToProps)(_MainView);

export default MainView;
