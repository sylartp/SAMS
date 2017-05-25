package cn.tp.service;

import cn.tp.domain.dao.ClubMapper;
import cn.tp.domain.dao.UserMapper;
import cn.tp.domain.pojo.Temp;
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

    @Resource
    private ClubMapper clubMapper;

    public User findUserByEmail(String email) {
        return userMapper.findUserByEmail(email);
    }

    public User findUserByUsername(String username) {
        return userMapper.findUserByUsername(username);
    }

    @Transactional
    public int addUser(User user) {
        return userMapper.addUser(user);
    }

    @Transactional
    public int editUser(User user) {
        return userMapper.editUserInfo(user);
    }

    @Transactional
    public int addClub(Temp temp){
        int clubId = Integer.parseInt(temp.getClubId());
        int num = Integer.parseInt(temp.getPresentNum())+1;
         userMapper.addClub(clubId,temp.getUsername(),num);
         clubMapper.updateClub(num,clubId);
         return 1;
    }

    @Transactional
    public int deleteUser(String email) {
        return userMapper.deleteUser(email);
    }
}

