import React from "react";
import {WebGLMap} from "@luciad/ria/view/WebGLMap";
import {getReference} from "@luciad/ria/reference/ReferenceProvider";

import "./LuciadMap.scss";

class LuciadMap extends React.Component<any, any>{
    private mapRef: HTMLDivElement;
    private map: WebGLMap;

    componentDidMount() {
        this.createMap();
    }

    componentWillUnmount() {
        this.destroyMap();
    }

    render() {
        return (
            <div className="LuciadMap" ref = {(ref) => {this.mapRef = ref}}/>
        );
    }

    private createMap() {
        this.destroyMap();
        this.map = new WebGLMap(this.mapRef, {reference: getReference("EPSG:4978")});
    }

    private destroyMap() {
        if (this.map) {
            this.map.destroy();
            this.map = null;
        }
    }
}

export default LuciadMap;
