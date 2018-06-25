import React, {Component, PropTypes} from 'react';

import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
  Style,
  Image
} from 'react-native-svg';

export default class CustomIcon extends Component {
  render() {
    if (this.props.name === "cross") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "15"}
          width={this.props.width ? this.props.width : "12"}
          viewBox="0 0 24 24"
          >
          <Path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>
      );
    } else if (this.props.name === "location") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 24 24"
          >
          <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          <Path d="M0 0h24v24H0z" fill="none"/>
        </Svg>
      );
    }
    else if (this.props.name === "call") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 24 24"
          rotation={270}
          >
          <Path d="M0 0h24v24H0z" fill="none"/>
          <Path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </Svg>
      );
    }
    else if (this.props.name === "clock") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 24 24"
          >
          <Path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <Path d="M0 0h24v24H0z" fill="none"/>
          <Path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </Svg>
      );
    }
    else if (this.props.name === "logo") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "75"}
          width={this.props.width ? this.props.width : "180"}
          viewBox="0 0 271.689 77.625"
          >
          <Path fill="#E63C2F" d="M17.421,27.383c3.212-5.198,7.936-7.748,14.171-7.748c13.32,0.472,19.933,9.165,19.933,26.168
            c0,16.627-7.747,25.034-23.239,25.319c-15.589,0.095-23.43-7.369-23.43-22.39V6.125h6.33c4.157,0,6.235,2.173,6.235,6.332V27.383z
            M17.421,45.238c-0.094,10.107,3.306,15.208,10.486,15.208s10.77-5.101,10.77-15.208c-0.283-9.637-3.779-14.36-10.581-14.36
            C21.295,30.878,17.798,35.601,17.421,45.238"/>
          <Path fill="#E63C2F" d="M69.287,33.429H56.723c1.511-9.26,8.03-13.793,19.555-13.793c13.794,0,20.784,4.533,21.068,13.793v17.003
            c0,13.793-8.313,19.934-21.824,20.879c-11.998,0.944-20.311-4.63-20.311-15.683c0.283-11.997,8.975-15.21,21.635-16.437
            c5.384-0.663,8.124-2.267,8.124-5.009c-0.284-2.833-2.929-4.251-8.124-4.251C72.405,29.932,69.949,31.067,69.287,33.429
            M85.159,49.866v-4.628c-2.929,1.227-6.33,2.267-10.014,3.022c-5.007,0.945-7.558,3.307-7.558,6.991
            c0.284,3.969,2.362,5.857,6.33,5.857C80.908,61.109,85.159,56.952,85.159,49.866"/>
          <Path fill="#E63C2F" d="M116.997,12.266v58.1h-12.565V6.125h6.519C114.257,6.125,116.997,8.96,116.997,12.266"/>
          <Path fill="#E63C2F" d="M145.526,71.5c-15.115-0.473-22.672-9.26-22.672-26.262c0-17.007,7.652-25.509,22.86-25.604
            c15.873,0,23.336,9.731,22.39,29.287h-32.307c0.471,7.65,3.777,11.523,9.917,11.523c2.93,0,5.669-1.227,8.125-3.588
            c1.135-1.229,2.55-1.795,4.251-1.795h9.259C164.608,65.643,157.808,71.5,145.526,71.5 M135.985,39.946h18.8
            c-0.757-6.611-3.873-10.014-9.259-10.014C140.142,29.932,136.931,33.334,135.985,39.946"/>
          <Path fill="#E63C2F" d="M196.354,30.878c-7.462,0-10.675,6.235-10.675,13.887v25.601h-12.563V6.125h6.328
            c4.156,0,6.234,2.173,6.234,6.332v14.925c6.424-7.369,14.265-9.447,23.618-6.14c6.991,2.55,10.297,9.257,9.92,20.122v29.002h-12.469
            V44.765C206.748,36.356,203.535,30.878,196.354,30.878"/>
          <Path fill="#E63C2F" d="M266.833,50.432c0,8.599-2.173,14.265-6.613,17.006c-4.441,2.55-9.353,3.873-14.738,3.873
            c-5.194,0-9.825-1.417-14.169-4.251c-4.346-2.74-6.52-8.219-6.52-16.628V20.39h12.564v32.594c0,5.572,2.835,8.313,8.502,8.313
            c5.669,0,8.504-2.741,8.504-8.313V26.627c-0.094-4.159,1.89-6.237,6.046-6.237h6.424V50.432z"/>
          <Rect y="0" fill="none" width="271.689" height="77.626"/>
        </Svg>
      );
    }
    else if (this.props.name === "Music") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#9e9e9e" d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/>
        </Svg>
      );
    }
    else if (this.props.name === "Health") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#9e9e9e" d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
        </Svg>
      );
    }
    else if (this.props.name === "Drink") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#9e9e9e" d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z"/>
      </Svg>
      );
    }
    else if (this.props.name === "Shopping") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#9e9e9e" d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/>
      </Svg>
      );
    }
    else if (this.props.name === "Food") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "22"}
          width={this.props.width ? this.props.width : "22"}
          viewBox="0 0 24 24"
          >
          <Path fill="#9e9e9e" d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
          <Path fill="none" d="M0 0h24v24H0z"/>
      </Svg>
      );
    }
    else if (this.props.name === "local_dining") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 24 24"
          >
          <Path d="M0 0h24v24H0z" fill="none"/>
          <Path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
      </Svg>
      );
    }
    else if (this.props.name == "gradient") {
      return(
        <Svg
            height="150"
            width="550"
        >
            <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="160">
                    <Stop offset="0" stopColor="black" stopOpacity="0" />
                    <Stop offset="1" stopColor="black" stopOpacity="1" />
                    <Stop offset="1" stopColor="black" stopOpacity="1" />
                </LinearGradient>
            </Defs>
            <Rect
                x="15"
                y="15"
                width="100%"
                height="90"
                strokeWidth="2"
                fill="url(#grad)"
            />
        </Svg>
      )
    }else if (this.props.name === "user") {
      return (
        <Svg
          height={this.props.height ? this.props.height : "17"}
          width={this.props.width ? this.props.width : "17"}
          viewBox="0 0 341.333 341.333"
          >
          <Path d="M170.667,170.667c47.147,0,85.333-38.293,85.333-85.333C256,38.187,217.813,0,170.667,0S85.333,38.187,85.333,85.333     C85.333,132.373,123.52,170.667,170.667,170.667z" fill={this.props.fill ? this.props.fill :"#9e9e9e"}/>
          <Path d="M170.667,213.333C113.813,213.333,0,241.813,0,298.667v42.667h341.333v-42.667     C341.333,241.813,227.52,213.333,170.667,213.333z" fill={this.props.fill ? this.props.fill :"#9e9e9e"}/>
      </Svg>
      );
    }
  }
}
