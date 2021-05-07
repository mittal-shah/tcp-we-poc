import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text } from 'native-base';
import { EmployeeLogOnContextImpl } from '@tcp/tcp-clock-models';
import { AbstractImpl, EmployeeLogOnContext } from '@tcp/tcp-models';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<EmployeeLogOnContextImpl>(undefined);

  useEffect(() => {
    const url =
      'http://172.16.1.2:8181/api/v0000/employeeLoginValues/{0}/GetInfo?companyNamespace={1}&applicationId={2}';
    const formattedUrl = url.format('0', '', '47');

    fetch(formattedUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) =>
        setData(
          AbstractImpl.fromJSON(
            {
              ObjEmployeeLogOnConfig: json[0],
              ObjCompanyConfig: json[1],
              ObjLogOnData: json[2],
            } as EmployeeLogOnContext,
            EmployeeLogOnContextImpl,
          ),
        ),
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>{data?.ObjLogOnData?.StrDatabaseInfoVersion}</Text>
        </View>
      )}
    </View>
  );
};

export default App;
