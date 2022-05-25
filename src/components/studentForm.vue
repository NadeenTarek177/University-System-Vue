<template>
    <div class="container">
            <div class="card mx-auto" style="width: 18rem">
                <div class="card-body pl-3">
                    <form @submit.prevent="Add_Student">
                        <div class="row mb-3">
                            <label for="InputName" class="col-sm-7 mx-auto col-form-label">Student name</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="InputName"  v-model="Name">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-7 mx-auto col-form-label">Email address</label>
                            <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" v-model="email">
                            </div>
                        </div>
            
                        <div class="row mb-3">
                            <label for="Grade" class="col-sm-7 mx-auto col-form-label">Grade</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="Grade" v-model="Grade">
                            </div>
                        </div>
                        <fieldset class="row mb-3">
                            <legend class="col-form-label col-sm-7 mx-auto p-1">Gender</legend>
                            <div class="col-sm-5">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" id="male" value="male" checked v-model="gender">
                                    <label class="form-check-label" for="male">Male</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" id="female" value="female" v-model="gender">
                                    <label class="form-check-label" for="female">Female</label>
                                </div>
                            </div>
                        </fieldset>
                        <button class="btn btn-primary register" type="submit">Add</button>
                        <br />
                        <br />
                        
                    </form>
                </div>
            </div>
    </div>
    
</template>


<script>
    import axios from "axios";
    export default {
        name:"studentFormComp",
        data() {
            return {
            Name: "",
            email: "",
            Grade:"",
            gender:"",
            };
        },
        methods: {
            Add_Student() {
            axios
                .post("students", {
                    Name: this.Name,
                    email: this.email,
                    Grade: this.Grade,
                    gender:this.gender,
                     
                })
                .then((res) => {
                console.log(res.data);
                alert("Student is added Successfully");
                document.getElementsByTagName("input").innerHTML="";
                })
                .catch((err) => {
                console.log(err);
                });
            }
        },
    }
</script>

<style scoped>
</style>