<template>
    <div>
        <h1>Student Details</h1>
        <div class="container">
            <div class="card mx-auto" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">{{Name}}</h5>
                <div class="card-text">
                    <textarea class="card-title col-12"  v-model="this.email"></textarea>
                    <textarea class="card-title col-12" type="text" v-model="this.gender"></textarea>
                    <textarea class="card-title col-12" type="text" v-model="this.Grade"></textarea>
                </div>
                <a href="#" class="btn btn-success px-5 mx-5" style="background-color:#1B5E20"  @click="update()">Update</a>
                <br/>
                <br/>
                <button class="btn btn-danger ms-3" @click.prevent="pushData">Go Back</button>
            
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "studentDetailsComp",
        props:['id'],
        data() {
            return {
                Name: "",
                email: "",
                Grade:"",
                gender:""
            };
        },
        created() {
            this.getstudentbyid();
        },
        methods: {
            getstudentbyid() {
                axios
                    .get(`students?id=${this.id}`)
                    .then((res) => {
                    console.log(res.data);
                    this.Name = res.data[0].Name;
                    this.email = res.data[0].email;
                    this.Grade = res.data[0].Grade;
                    this.gender = res.data[0].gender;
                    })
                    .catch((err) => {
                    console.log(err);
                    });
            },
            update()
            {
                axios
                    .put("/students/"+this.id,{
                        Name: this.Name,
                        email: this.email,
                        Grade: this.Grade,
                        gender:this.gender,
                    })
                    .then(()=>alert("Done Update"))
                    .catch(()=>console.log("err"));

            },
            pushData(){
                this.$router.push('/students')

            }
        },
    }
</script>

<style scoped>

</style>