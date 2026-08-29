import { get, post, put, del } from '../utils/api';
import { View, Text } from "react-native";
import { useEffect, useState } from 'react';

export default function Server(props) {
  const [ loaded, setLoaded ] = useState(false);
  const [ responses, setResponses ] = useState({});
  const urls = {
   get: props.endpoint + '/api?input=abc',
   post: props.endpoint + '/api',
   put: props.endpoint + '/api',
   delete: props.endpoint + '/api?input=abc'
  };

  const payload = {
   a: 'A',
   b: 'B'
  };

 useEffect(() => {
  Promise.all([
      get(urls.get),
      post(urls.post, payload),
      put(urls.put, payload),
      del(urls.delete),
  ]).then(([getResponse, postResponse, putResponse, deleteResponse]) => {
   setResponses({
    get: JSON.stringify(getResponse.data),
    post: JSON.stringify(postResponse.data),
    put: JSON.stringify(putResponse.data),
    delete: JSON.stringify(deleteResponse.data),
   });

   setLoaded(true);
  });
 }, []);

  return loaded && <View dataSet={{ class: 'server' }}>
   {
    ['get', 'post', 'put', 'delete'].map(part => (
        <View key={part} dataSet={{ class: 'verb' }}>
         <Text style={props.styles.paragraph}>
          <Text style={props.styles.bold}>
           URL:&nbsp;
          </Text>
          <Text>
           {urls[part]}
          </Text>
         </Text>

         <Text style={props.styles.paragraph}>
          <Text style={props.styles.bold}>
           Response:&nbsp;
          </Text>
          <Text>
           {responses[part]}
          </Text>
         </Text>
        </View>
    ))
   }
   </View>
}