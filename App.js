import { DevSettings, StyleSheet, Text, View } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";
import { useDeferredValue } from 'react'
export default function App() {
    const { control, handleSubmit,reset, formState: { errors } } = useForm({
      defaultValues: {
        fullname: '',
        email: '',
        phone: '',
        password: '',
        age: '',

      }
    });
    const onsubmit=(data)=>{
      console.log(data); 
      const{fullname,email,phone,password,age}=data;
      reset();
    }
  return (
    <View style={styles.container}>
      <view style={styles.form}>
        <view>
          <Controller
              control={control}
              rules={{
                required: true,
                maxLength:30,
                minLength:2,
                pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
              }}
              render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                label="Full name"
                mode='outlined'
                left={<TextInput.Icon icon="clipboard-account"/>}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
              )}
              name="fullname"
          />
          {errors.fullname?.type == 'required' && <Text style={{color:'red'}}>Name is required.</Text>}
          {errors.fullname?.type == 'maxLength' && <Text style={{color:'red'}}>Name 30 mas characters.</Text>}
          {errors.fullname?.type == 'minLength' && <Text style={{color:'red'}}>Name 3 mas characters.</Text>}
          {errors.fullname?.type == 'pattern' && <Text style={{color:'red'}}>Only letters in field Name.</Text>}
          <Controller
              control={control}
              rules={{
                required: true,
                pattern:/^\d{1,2}$/
              }}
              render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                label="Age"
                mode='outlined'
                left={<TextInput.Icon icon="numeric"/>}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
              )}
              name="age"
          />
          {errors.age?.type == 'required' && <Text style={{color:'red'}}>Age is required.</Text>}
          {errors.age?.type == 'pattern' && <Text style={{color:'red'}}>Age is invalid.</Text>}
          <Controller
              control={control}
              rules={{
                required: true,
                pattern:/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
              }}
              render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                label="E-mail"
                mode='outlined'
                left={<TextInput.Icon icon="email-box"/>}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
              )}
              name="email"
          />
          {errors.email?.type == 'required' && <Text style={{color:'red'}}>E-mail is required.</Text>}
          {errors.email?.type == 'pattern' && <Text style={{color:'red'}}>E-mail is invalid.</Text>}
          <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 8,
                pattern: /^[\w\s]{8,}$/
              }}
              render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                placeholder='exmple: duvan112'
                secureTextEntry={true}
                label="password"
                mode='outlined'
                left={<TextInput.Icon icon="eye"/>}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
              )}
              name="password"
          />
          {errors.password?.type == 'required' && <Text style={{color:'red'}}>password is required.</Text>}
          {errors.password?.type == 'maxLength' && <Text style={{color:'red'}}>Max 8 characters.</Text>}
          {errors.password?.type == 'pattern' && <Text style={{color:'red'}}>password is invalid, only letters and numbers.</Text>}
          <Controller
              control={control}
              rules={{
                required: true,
                maxLength:10,
                pattern:/^[1-9][0-9]*$/
              }}
              render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputs}
                label="phone"
                mode='outlined'
                left={<TextInput.Icon icon="phone"/>}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
              )}
              name="phone"
          />
          {errors.phone?.type == 'required' && <Text style={{color:'red'}}>phone is required.</Text>}
          {errors.phone?.type == 'maxLength' && <Text style={{color:'red'}}>Max 10 numbers.</Text>}
          {errors.phone?.type == 'pattern' && <Text style={{color:'red'}}>phone is invalid, only numbers.</Text>}
          <Button  style={styles.buttonSend}icon="send" mode="contained" onPress={handleSubmit(onsubmit)}>Send</Button>
        </view>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#835FF3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSend:{
    margin:20,
    width:100

  },
  inputs:{
    marginTop:10,
    marginLeft:30,
    marginRight:30,
    borderColor: '#5520FA',
    borderRadius:5,
    borderStyle:'solid',
    borderWidth:3
  },
  form:{
    width:400,
    backgroundColor:'#C5B2FE',
    borderColor:'#5520FA',
    borderStyle:'solid',
    borderWidth:6
  }
});
