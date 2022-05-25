<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Grade</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="student in students" :key="student.id">
              <th scope="row">{{ student.id }}</th>
              <td>{{ student.Name }}</td>
              <td>{{ student.gender }}</td>
              <td>{{student.email}}</td>
              <td>{{student.Grade}}</td>
              <td>
                  <button type="button" class="btn btn-danger" v-on:click="_delete(student.id)">Delete</button> 
              </td>
              <td>
                  <router-link class="btn btn-success"  :to="`/students/${student.id}`">Edit</router-link>
              </td>
              
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name:"studentDataComp",
        data() {
            return {
            students: [],

            };
        },
        created() {
            this.getStudentsList();
        },
        methods: {
            getStudentsList(){
                axios
                    .get("students")
                    .then((res) => {
                    console.log(res.data);
                    this.students = res.data;
                    })
                    .catch((err) => {
                    console.log(err);
                    });
            },
            _delete(id)
            {
                axios.delete("students/"+id).then(()=>{
                    this.getStudentsList();
                    alert("student with id :"+id+" is deleted successfully");
                })
                .catch((err) => {
                    console.log(err);
                });

                
            },
        },
    };
</script>

<style scoped>

</style>