import React, { Component } from 'react';
import { Modal ,Form, Input, Icon, Row, Col, Button } from 'antd';

const FormItem = Form.Item;

class NewTeamForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        fetch('http://localhost:9000/newteam?name='+values.name,{
          method: 'GET',
          headers: {
                "content-type": "application/json",
                "Accept": "application/json",
          }
        })
        .then(response => response.json())
        .then(resp => {
          if(resp.status === 200){
                alert('Equipo agregado correctamente!')
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
          label="Nombre del Equipo"
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'Ingrese un nombre.',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Agregar</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNewTeamForm = Form.create()(NewTeamForm);

const styles = {
  position: "relative",
  top: "10px",
  left: "48%"
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
          icon="plus"
          onClick={this.showModal}
        >
          Agregar Equipo
        </Button>

        <Modal
          title="Nuevo Equipo"
          visible={this.state.visible}
          onOk={this.showModal}
          onCancel={this.showModal}
        >
          <WrappedNewTeamForm />
        </Modal>
      </div>
    );
  }
}

export default ButtonForm;
