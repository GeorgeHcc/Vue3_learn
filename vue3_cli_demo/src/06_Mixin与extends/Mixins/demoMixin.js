export const demoMixin={
    data(){
        return{
            msg:'Mixin'
        }
    },
    methods:{
        foo(){
            alert('foo')//ִ��
            console.log('Mixin Function');//Ϊ�β�ִ�У���
            console.log(`${this.msg} Function`);
        }
    },
    created() {
        console.log('Mixin is created');
    },
}