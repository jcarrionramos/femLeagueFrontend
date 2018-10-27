import React, { Component } from 'react';
import { Modal ,Form, Input, InputNumber, Select,Icon, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class NewPlayerForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    teams: []
  };

  componentDidMount() {
    fetch('http://localhost:9000/positions',{
      method: 'GET',
      headers: {
          "content-type": "application/json",
          "Accept": "application/json",
      },
    })
    .then(response => response.json())
    .then(resp => {
      this.setState({
          teams: resp.data
      });
    })
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        fetch('http://localhost:9000/newplayer',{
          method: 'POST',
          headers: {
                "content-type": "application/json",
                "Accept": "application/json",
            },
          body: JSON.stringify(values),
        })
        .then(response => response.json())
        .then(resp => {
          if(resp.status === 200){
                alert('Jugador agregado correctamente!')
            } else {
                alert('Ups! ha ocurrido un problema, intenta nuevamente')
            }
        })
        .catch(error => {
            alert('Ups! ha ocurrido un problema, intenta nuevamente')
            console.log(error)
        })
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult, teams } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>

      <FormItem
        {...formItemLayout}
        label="Rut"
      >
        {getFieldDecorator('rut', {
          rules: [{
            type: 'number', message: 'rut no válido',
          },{
            required: true, message: 'Porfavor ingrese un rut',
          }],
        })(
          <InputNumber />
        )}
      </FormItem>

        <FormItem
          {...formItemLayout}
          label="Primer nombre"
        >
          {getFieldDecorator('first_name', {
            rules: [{
              required: true, message: 'Porfavor ingrese el primer nombre!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Apellido paterno"
        >
          {getFieldDecorator('last_name', {
            rules: [{
              required: true, message: 'Porfavor ingrese el apellido paterno!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'e-mail no valido!',
            }, {
              required: true, message: 'Porfavor ingrese un e-mail',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Número telefónico"
        >
          {getFieldDecorator('phone', {
            rules: [{
              required: true, message: 'Porfavor ingrese número telefónico!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Equipo"
        >
          {getFieldDecorator('team_name', {
            rules: [{
              required: true, message: 'Porfavor seleccione un equipo!',
            }],
          })(
            <Select
              placeholder="Seleccione el equipo"
            >
              { teams.map((team, index) => {
                return(
                  <Option value={team.name} key={index}> {team.name} </Option>
                );
              })}
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Número de Camiseta"
        >
          {getFieldDecorator('dorsal_number', {
            rules: [{
              required: true, message: 'Porfavor ingrese un número!',
            }],
          })(
            <Input/>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Agregar</Button>
          <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Limpiar
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNewPlayerForm = Form.create()(NewPlayerForm);

const styles = {
  position: "relative",
  top: "10px",
  left: "49%"
}

class ButtonForm extends Component {
  state = {
    visible: false
  }

  showModal = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  }

  render(){
    return(
      <div>
        <Button
          style={styles}
          type="primary"
          icon="user-add"
          onClick={this.showModal}
        >
          Agregar Jugador
        </Button>

        <Modal
          title="Nuevo Jugador"
          style={{top: "12px" }}
          visible={this.state.visible}
          onOk={this.showModal}
          onCancel={this.showModal}
          footer={null}
        >
          <WrappedNewPlayerForm />
        </Modal>
      </div>
    );
  }
}

export default ButtonForm;
