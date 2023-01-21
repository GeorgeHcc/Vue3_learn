export const demoMixin={
    data(){
        return{
            msg:'Mixin'
        }
    },
    methods:{
        foo(){
            alert('foo')//执行
            console.log('Mixin Function');//为何不执行？？
            console.log(`${this.msg} Function`);
        }
    },
    created() {
        console.log('Mixin is created');
    },
}