<!-- <template>
    <div>


    </div>
  </template> -->

  <template>
    <section class="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
        <div class="container">
           <div class="flex flex-wrap lg:justify-between -mx-4">
              <div class="w-full lg:w-1/2 xl:w-6/12 px-4">
                 <div class="max-w-[570px] mb-12 lg:mb-0">
                    <!-- <span class="block mb-4 text-base text-primary font-semibold">
                    Contact Us
                    </span> -->
                    <!-- <h2
                       class="
                       text-dark
                       mb-6
                       px-4
                       uppercase
                       font-bold
                       text-[32px]
                       sm:text-[40px]
                       lg:text-[36px]
                       xl:text-[40px]
                       "
                       >
                       GET IN TOUCH WITH US
                    </h2> -->
                    <h2 class="text-2xl text-gray-900 font-bold md:text-4xl m-3">Get in Touch with us!</h2>
                    <div class="px-4">
                    <p class="text-base text-body-color leading-relaxed mb-12">
                        




<p class ="font-bold md:text-xl">Have a question about our products or services?<br>Need assistance in finding the perfect pet companion? <br>We're here to help!</p>

<p class="md:text-xl">At Jack Pet Supplies, we are passionate about pets and committed to providing exceptional customer service. Whether you're looking for pet supplies, grooming services, or expert advice, our knowledgeable team is ready to assist you.

Feel free to reach out to us using the contact form below or give us a call. We love hearing from fellow pet enthusiasts and can't wait to meet you and your furry friends!

Thank you for choosing Jack Pet Supplies. We look forward to serving you and your beloved pets!

</p>
                    </p>
                    </div>
                 </div>
              </div>


              <!-- <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
                 <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                    <form @submit="handleSubmit" form id="contactForm">
                       <div class="mb-6">
                          <input
                             type="text"
                             id="name"
                             v-model="formData.name"
                             placeholder="Your Name"
                             class="
                             w-full
                             rounded
                             py-3
                             px-[14px]
                             text-body-color text-base
                             border border-[f0f0f0]
                             outline-none
                             focus-visible:shadow-none
                             focus:border-primary
                             "
                          />
                       </div>
                       <div class="mb-6">
                          <input
                             type="email"
                             id="email"
                             v-model="formData.email"
                             placeholder="Your Email"
                             class="
                             w-full
                             rounded
                             py-3
                             px-[14px]
                             text-body-color text-base
                             border border-[f0f0f0]
                             outline-none
                             focus-visible:shadow-none
                             focus:border-primary
                             "
                          />
                       </div>
                       <div class="mb-6">
                          <input
                             type="text"
                             id="phone"
                             v-model="formData.phone"
                             placeholder="Your Phone"
                             class="
                             w-full
                             rounded
                             py-3
                             px-[14px]
                             text-body-color text-base
                             border border-[f0f0f0]
                             outline-none
                             focus-visible:shadow-none
                             focus:border-primary
                             "
                          />
                       </div>
                       <div class="mb-6">
                          <textarea
                             id="message"
                             v-model="formData.message"
                             rows="6"
                             placeholder="Your Message"
                             class="
                             w-full
                             rounded
                             py-3
                             px-[14px]
                             text-body-color text-base
                             border border-[f0f0f0]
                             resize-none
                             outline-none
                             focus-visible:shadow-none
                             focus:border-primary
                             "
                          ></textarea>
                       </div>
                       <div>
                          <button
                             type="submit"
                             class="button
                             w-full
                             text-white
                             bg-blue-700 
                             rounded
                             border border-primary
                             p-3
                             transition
                             hover:bg-opacity-90
                             "
                          >
                             Send Message
                          </button>
                       </div>
                    </form>
                 </div>
              </div> -->

            
<div class="w-full lg:w-1/2 xl:w-5/12 px-4">
   <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
      <form @submit="handleSubmit" form id="contactForm">
         <div class="mb-6">
            <input
               type="text"
               id="name"
               v-model="formData.name"
               placeholder="Your Name"
               class="
               w-full
               rounded
               py-3
               px-[14px]
               text-body-color text-base
               border border-[f0f0f0]
               outline-none
               focus-visible:shadow-none
               focus:border-primary
               "
            />
         </div>
         <div class="mb-6">
            <input
               type="email"
               id="email"
               v-model="formData.email"
               placeholder="Your Email"
               class="
               w-full
               rounded
               py-3
               px-[14px]
               text-body-color text-base
               border border-[f0f0f0]
               outline-none
               focus-visible:shadow-none
               focus:border-primary
               "
            />
         </div>
         <div class="mb-6">
            <input
               type="text"
               id="phone"
               v-model="formData.phone"
               placeholder="Your Phone"
               class="
               w-full
               rounded
               py-3
               px-[14px]
               text-body-color text-base
               border border-[f0f0f0]
               outline-none
               focus-visible:shadow-none
               focus:border-primary
               "
            />
         </div>
         <div class="mb-6">
            <textarea
               id="message"
               v-model="formData.message"
               rows="6"
               placeholder="Your Message"
               class="
               w-full
               rounded
               py-3
               px-[14px]
               text-body-color text-base
               border border-[f0f0f0]
               resize-none
               outline-none
               focus-visible:shadow-none
               focus:border-primary
               "
            ></textarea>
         </div>
         <div>
            <button
               type="submit"
               class="button
               w-full
               text-white
               bg-blue-700 
               rounded
               border border-primary
               p-3
               transition
               hover:bg-opacity-90
               "
            >
               Send Message
            </button>
         </div>
      </form>
   </div>
</div>












           </div>
        </div>
     </section>
    </template>


<!-- the below code uploaded data to firestore -->
  
  <!-- <script>
  // the relevant methods
  import { collection, addDoc } from "firebase/firestore"
  // the firestore instance
  import db from '../firebase/init'
  
  export default {
    created() {
      this.createUser()
    },
    methods: {
      async createUser() {
        // 'users' collection reference
        const colRef = collection(db, 'contact')
        // data to send
        const dataObj = {
          name: '',
          email: '',
          phone: '',
          message:''
        }
  
        // create document and return reference to it
        const docRef = await addDoc(colRef, dataObj)
  
        // access auto-generated ID with '.id'
        console.log('Document was created with ID:', docRef.id)
      }
    },
    created(){
        this.createUser()
    }
  }
  </script> -->

  

<script>
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/init';

export default {
    name:'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      if (
    this.formData.name === '' ||
    this.formData.email === '' ||
    this.formData.phone === '' ||
    this.formData.message === ''
  ) {
    alert('Please fill in all the required fields.');
    console.log('Please fill in all the required fields');
    return; // Stop further execution of the method
  }

      try {
        // Add the form data to the 'submissions' collection in Firestore
        const colRef = collection(db, 'contacts');
        await addDoc(colRef, this.formData);

        console.log('Form submission added');
        alert("Submission added")
        // Clear the form fields
        this.formData = {
          name: '',
          email: '',
          phone: '',
          message: ''
        };
        // Show a success message to the user or redirect them to a thank-you page.
      } catch (error) {
        console.error('Error adding form submission:', error);
        alert(error);
        // Show an error message to the user.
      }
    }
  }
};
</script>
