import  {Form, Input, Button} from 'antd'

export const Register = () => {
  return (
    <div className="authentication">
        <div className="authentication-form card p-3">
            <h1 className="card-title">Nice to meet you</h1>
            <Form layout="vertical">
                <Form.Item label="Name" name="name">
                    <Input placeholder="Name"/>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input placeholder="Password"/>
                </Form.Item>
                <Button className="primary-button mt-3">Register</Button>
            </Form>
        </div>
    </div>
  )
}
