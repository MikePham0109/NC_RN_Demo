import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ScrollView,StatusBar,} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Languagelist() {
    
    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
      {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}

       

      <View style={[style.main,{backgroundColor:theme.bg,marginTop:30}]}>
        <AppBar 
        color={theme.bg}
        title='Language'
        titleStyle={{color:theme.txt,}}
        centerTitle={true}
        elevation={0}
        leading={ <TouchableOpacity onPress={()=>navigation.navigate('Language')}>
       <Avatar.Icon icon="arrow-left"
                        style={{ backgroundColor:theme.icon,}}
                        color={theme.txt} size={45}/>
        </TouchableOpacity>
        }/>

        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={[ style.radio,{paddingVertical:7,flexDirection:'row',alignItems:'center',marginTop:20,backgroundColor:theme.input}]}>
            <RadioButton
              
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}
           
            />
            <Text style={[style.txt,{ color:theme.txt,}]}>English (UK)</Text>
        </View>
        <View style={[ style.radio,{paddingVertical:7,flexDirection:'row',alignItems:'center',marginTop:10,backgroundColor:theme.input}]}>
            <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}

            />
            <Text style={[style.txt,{ color:theme.txt,}]}>English</Text>
        </View>
        <View style={[ style.radio,{paddingVertical:7,flexDirection:'row',alignItems:'center',marginTop:10,backgroundColor:theme.input}]}>
            <RadioButton
            value="third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}

            />
            <Text style={[style.txt,{ color:theme.txt,}]}>Bahasa Indonesia</Text>
        </View>
        <View style={[ style.radio,{paddingVertical:7,flexDirection:'row',alignItems:'center',marginTop:10,backgroundColor:theme.input}]}>
            <RadioButton
            value="four"
            status={checked === 'four' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('four')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}

            />
            <Text style={[style.txt,{ color:theme.txt,}]}>Chineses</Text>
        </View>
        <View style={[ style.radio,{paddingVertical:7,flexDirection:'row',alignItems:'center',marginTop:10,backgroundColor:theme.input}]}>
            <RadioButton
            value="five"
            status={checked === 'five' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('five')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}

            />
            <Text style={[style.txt,{ color:theme.txt,}]}>Croatian</Text>
        </View>
        <View style={[ style.radio,{paddingVertical:7,flexDirection:'row',alignItems:'center',marginTop:10,backgroundColor:theme.input}]}>
            <RadioButton
            value="six"
            status={checked === 'six' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('six')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}

            />
            <Text style={[style.txt,{ color:theme.txt,}]}>Czech</Text>
        </View>
        <View style={[ style.radio,{paddingVertical:7,flexDirection:'row',alignItems:'center',marginTop:10,backgroundColor:theme.input}]}>
            <RadioButton
            value="seven"
            status={checked === 'seven' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('seven')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}

            />
            <Text style={[style.txt,{ color:theme.txt,}]}>Danish</Text>
        </View>
        <View style={[ style.radio,{paddingVertical:7,flexDirection:'row',alignItems:'center',marginTop:10,backgroundColor:theme.input}]}>
            <RadioButton
            value="eight"
            status={checked === 'eight' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('eight')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}

            />
            <Text style={[style.txt,{ color:theme.txt,}]}>Filipino</Text>
        </View>
        <View style={[ style.radio,{paddingVertical:7,flexDirection:'row',alignItems:'center',marginTop:10,backgroundColor:theme.input,marginBottom:10}]}>
            <RadioButton
            value="nine"
            status={checked === 'nine' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('nine')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}
            />
            <Text style={[style.txt,{ color:theme.txt,}]}>Finland</Text>
        </View>
        </ScrollView>

        </View>
    </SafeAreaView>
  )
}