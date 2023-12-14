package Probaodinadcat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probaodinadcat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РегистрацВхода
 */
@Entity(name = "IISProbaodinadcatРегистрацВхода")
@Table(schema = "public", name = "РегистрацВхода")
public class RegistracVxoda {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Komnata")
    @Convert("Komnata")
    @Column(name = "Комната", length = 16, unique = true, nullable = false)
    private UUID _komnataid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Komnata", insertable = false, updatable = false)
    private Komnata komnata;

    @OneToMany(mappedBy = "registracvxoda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VxodSotrudnika> vxodsotrudnikas;

    @OneToMany(mappedBy = "registracvxoda", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VxodGostya> vxodgostyas;


    public RegistracVxoda() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}