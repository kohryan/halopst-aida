<template>
    <div class="chat-container">
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" :class="{'user-message': message.user, 'ai-message': !message.user}">
          <img :src="message.user ? userAvatar : aiAvatar" class="avatar" />
          <div class="message-content">
            <span v-html="message.text"></span>
          </div>
        </div>
      </div>
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
    </div>
  </template>
  
  <script>
  import { getAiResponse } from '../api'
  
  export default {
    name: 'Chat',
    data() {
      return {
        messages: [],
        newMessage: '',
        userAvatar: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
        aiAvatar: 'https://media.istockphoto.com/id/1250000899/vector/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-vector.jpg?s=612x612&w=0&k=20&c=xj8GkmfFYH_Frho_pJ0HL2dkDwbZAI0Of6KwKdVsh1s='
      }
    },
    methods: {
      async sendMessage() {
        if (this.newMessage.trim() === '') return;
  
        // Add user message
        this.messages.push({ text: this.newMessage, user: true });
  
        // Get AI response
        const response = await getAiResponse(this.newMessage);
        this.messages.push({ text: response, user: false });
  
        // Clear input
        this.newMessage = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 600px;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  
  .user-message,
  .ai-message {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
  }
  
  .user-message {
    flex-direction: row-reverse;
    text-align: right;
  }
  
  .user-message .message-content {
    background-color: #d1e7dd;
    border-radius: 15px 15px 0 15px;
  }
  
  .ai-message .message-content {
    background-color: #f8d7da;
    border-radius: 15px 15px 15px 0;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px;
  }
  
  .message-content {
    max-width: 70%;
    padding: 10px;
    word-wrap: break-word;
  }
  
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    width: calc(100% - 20px);
    box-sizing: border-box;
  }
  </style>
  