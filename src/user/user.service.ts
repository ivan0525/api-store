import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /**
   * 通过唯一标识查询用户
   * @param userWhereUniqueInput - 用户的唯一标识
   * @returns 用户对象，如果未找到则返回 null
   */
  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async queryPage(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  /**
   * 创建一个新的用户
   *
   * @param {Prisma.UserCreateInput} data - 用户的数据，包含创建用户所需的所有信息
   * @returns {Promise<User>} - 创建成功的用户对象
   */
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  /**
   * 更新数据库中符合指定条件的用户信息
   *
   * @param {Object} params - 更新用户信息的参数
   * @param {Prisma.UserWhereUniqueInput} params.where - 用于定位要更新的用户的唯一标识
   * @param {Prisma.UserUpdateInput} params.data - 要更新的用户数据
   * @returns {Promise<User>} - 更新后的用户信息
   */
  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  /**
   * 删除符合指定条件的用户
   * @param where - 删除用户的条件
   * @returns 被删除的用户对象
   * @throws {PrismaClientKnownRequestError} 如果没有找到符合条件的用户或者发生其他数据库错误
   */
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
