import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function Formulario() {
    const [tipoItem, setTipoItem] = useState('0');
    const [formaItem, setFormaItem] = useState('0');
    const [dosagem, setDosagem] = useState('');
    const [dataValidade, setDataValidade] = useState('');
    const [nomeItem, setNomeItem] = useState('');
    const [condicaoItem, setCondicaoItem] = useState('0');
    const [quantidade, setQuantidade] = useState('');
    const [necessidadeArmazenamento, setNecessidadeArmazenamento] = useState('0');
    const [descricaoDetalhada, setDescricaoDetalhada] = useState('');
    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Formulário de Doação</Text>
            <Text style={styles.subtitle}>Preencha os campos abaixo:</Text>

            {/* Tipo de Item */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Tipo de item*</Text>
                    value={tipoItem}
                    onValueChange={(value) => setTipoItem(value)}
                    items={[
                        { label: 'Medicamento', value: '1' },
                        { label: 'Suplemento', value: '2' },
                        { label: 'Primeiros Socorros', value: '3' },
                        { label: 'Outros', value: '4' },
                    ]}
                    style={pickerSelectStyles}
                
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Nome do item*</Text>
                <TextInput
                    style={styles.input}
                    value={nomeItem}
                    onChangeText={setNomeItem}
                    placeholder="Digite o nome do item"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Forma farmacêutica*</Text>
                {/* <RNPickerSelect
                    value={formaItem}
                    onValueChange={(value) => setFormaItem(value)}
                    items={[
                        { label: 'Comprimido', value: '1' },
                        { label: 'Xarope', value: '2' },
                        { label: 'Creme', value: '3' },
                    ]}
                    style={pickerSelectStyles}
                /> */}
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Dosagem*</Text>
                <TextInput
                    style={styles.input}
                    value={dosagem}
                    onChangeText={setDosagem}
                    placeholder="Digite a dosagem"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Quantidade*</Text>
                <TextInput
                    style={styles.input}
                    value={quantidade}
                    onChangeText={setQuantidade}
                    placeholder="Digite a quantidade"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Data de validade*</Text>
                <TextInput
                    style={styles.input}
                    value={dataValidade}
                    onChangeText={setDataValidade}
                    placeholder="DD/MM/AAAA"
                />
            </View>

            {/* Necessidade de Armazenamento */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Necessidade de armazenamento*</Text>
                {/* <RNPickerSelect
                    value={necessidadeArmazenamento}
                    onValueChange={(value) => setNecessidadeArmazenamento(value)}
                    items={[
                        { label: 'Temperatura ambiente', value: '1' },
                        { label: 'Refrigerado', value: '2' },
                    ]}
                    style={pickerSelectStyles}
                /> */}
            </View>

            {/* Descrição Detalhada */}
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Descrição detalhada*</Text>
                <TextInput
                    style={styles.textArea}
                    value={descricaoDetalhada}
                    onChangeText={setDescricaoDetalhada}
                    placeholder="Digite a descrição detalhada"
                    multiline
                    numberOfLines={4}
                />
            </View>

            {/* Checkbox */}
            <View style={styles.checkBoxContainer}>
                {/* <CheckBox
                    value={isCheckBoxChecked}
                    onValueChange={setIsCheckBoxChecked}
                /> */}
                <Text style={styles.labelCheckBox}>Confirmo que o item não está vencido</Text>
            </View>

            {/* Botão de Submissão */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#202020'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'white'
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: 'white'

    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white'

    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        height: 100,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    labelCheckBox: {
        marginLeft: 10,
        fontSize: 16,
        color: 'white'
    },
    button: {
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#000',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#000',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
};
