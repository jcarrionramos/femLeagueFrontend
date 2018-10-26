import React, { Component } from 'react';
import { Modal ,Form, Input, InputNumber, Select,Icon, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class NewRefereeForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleReset = () => {
    this.props.form.resetFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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
            required: true, message: 'Porfavor ingrese un rut',
          }],
        })(
          <Input />
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

const WrappedNewRefereeForm = Form.create()(NewRefereeForm);

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
          Agregar Árbitro
        </Button>

        <Modal
          title="Nuevo Jugador"
          style={{top: "12px" }}
          visible={this.state.visible}
          onOk={this.showModal}
          onCancel={this.showModal}
          footer={null}
        >
          <WrappedNewRefereeForm />
        </Modal>
      </div>
    );
  }
}

export default ButtonForm;
