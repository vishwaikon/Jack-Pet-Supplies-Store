<!-- <template>
    <div>
      
      <DonationsComponent :donations="donationData" />
    </div>
  </template>
  
  <script>
  
  import DonationsComponent from './DonationsComponent.vue';
  
  export default {
    components: {
      DonationsComponent,
    },
    data() {
      return {
        donationData: {
        donations:[
          { id: 1, name: 'Theresa May', amount: 500 },
          { id: 2, name: 'James wilson', amount: 400 },
          { id: 3, name: 'Emma Thompson', amount: 300 },
          { id: 4, name:'Sophia Davis', amount: 200 },
          { id:5,name:'Oliver Harris', amount:200},

          
        ]
        }
      };
    },
  };
  </script> -->


  <!-- <template>
    <div>
      <DonationsComponent :donations="donationData" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import DonationsComponent from './DonationsComponent.vue';
  
  export default {
    components: {
      DonationsComponent,
    },
    data() {
      return {
        donationData: [],
      };
    },
    mounted() {
      this.fetchDonationData();
    },
    methods: {
      fetchDonationData() {
        axios
          .get('https://vishwaikon.github.io/Rescue_Donations/donation.json')
          .then(response => {
            this.donationData = response.data.donationData;
          })
          .catch(error => {
            console.error('Error fetching donation data:', error);
          });
      },
    },
  };
  </script>
   -->


   <template>
    <div>
      
      <DonationsComponent :donations="donationData" />
    </div>
  </template>
  
  <script>
  import DonationsComponent from './DonationsComponent.vue';
  
  export default {
    components: {
      DonationsComponent,
    },
    data() {
      return {
        donationData: [
          { id: 1, name: 'Theresa May', amount: 500 },
          { id: 2, name: 'James Wilson', amount: 400 },
          { id: 3, name: 'Emma Clarke', amount: 300 },
          { id: 4, name: 'Sophia Davis', amount: 200 },
          { id: 5, name: 'Oliver Harris', amount: 200 }
        ]
      };
    },
  };
  </script>
  