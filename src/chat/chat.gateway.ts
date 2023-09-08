import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @SubscribeMessage('send_message')
  async sendMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    // const response = await this.chatService.sendMessage(message);
    client.broadcast.emit('receive_message');
    // return response;
  }

  @SubscribeMessage('receive_message')
  async receiveMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    // const response = await this.chatService.sendMessage(message);
    client.broadcast.emit('receive_message');
    // return response;
  }
}
