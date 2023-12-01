import { get, post, put, del } from '../utils/api';
import { Component } from 'react';
import { View, Text } from "react-native";

export default class Play extends Component {
 constructor(props) {
  super(props);
  this.state = {
   get: '',
   post: '',
   put: '',
   delete: '',
   loaded: false
  };

  this.getUrl = props.endpoint + '/api?input=abc';
  this.postUrl = props.endpoint + '/api';
  this.putUrl = props.endpoint + '/api';
  this.deleteUrl = props.endpoint + '/api?input=abc';
  this.payload = {
   a: 'A',
   b: 'B'
  };
 }

 async componentDidMount() {
  const getResponse = await get(this.getUrl);

  const postResponse = await post(this.postUrl, this.payload);

  const putResponse = await put(this.putUrl, this.payload);

  const deleteResponse = await del(this.deleteUrl);

  this.setState({
   get: JSON.stringify(getResponse.data),
   post: JSON.stringify(postResponse.data),
   put: JSON.stringify(putResponse.data),
   delete: JSON.stringify(deleteResponse.data),
   loaded: true
  });
 }

 renderGetPart = () => {
  return (
   <View>
    {this.renderPart('get')}
   </View>
  );
 }

 renderPostPart = () => {
  return (
   <View>
    {this.renderPart('post')}
   </View>
  );
 }

 renderPutPart = () => {
  return (
   <View>
    {this.renderPart('put')}
   </View>
  );
 }

 renderDeletePart = () => {
  return (
   <View>
    {this.renderPart('delete')}
   </View>
  );
 }


 renderPart = type => {
  return (
   <View>
    <Text>
      URL:
     <Text>
         {this[type + 'Url']}
     </Text>
    </Text>

    <Text>
      Response:
     <Text>
         {this.state[type]}
     </Text>
    </Text>
   </View>
  );
 }

 renderParts = () => {
  if (this.state.loaded) {
   return (
    <View>
     {this.renderGetPart()}
     {/*{this.renderPostPart()}*/}
     {/*{this.renderPutPart()}*/}
     {/*{this.renderDeletePart()}*/}
    </View>
   );
  }
 }

 render() {
  return (
   <View>
    {this.renderParts()}
   </View>
  );
 }
}