package cn.tp.service;

import cn.tp.domain.dao.UserMapper;
import cn.tp.domain.pojo.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * Created by tppppp on 2017/4/5.
 */
@Service
public class UserService {

    @Resource
    private UserMapper userMapper;

    public User findUserByEmail(String email){
        return userMapper.findUserByEmail(email);
    }

    @Transactional
    public int addUser(User user){
        return userMapper.addUser(user);
    }
}
